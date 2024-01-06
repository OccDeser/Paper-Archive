# Crypto[2023-4]
## Fast Blind Rotation for Bootstrapping FHEs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#fast-blind-rotation-for-bootstrapping-fhes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#fast-blind-rotation-for-bootstrapping-fhes)
### Authors
* Binwu Xiang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yiran Dai, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Binwu Xiang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yiran Dai, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Dengguo Feng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Binwu Xiang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yiran Dai, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Blind rotation is one of the key techniques to construct fully homomorphic encryptions with the best known bootstrapping algorithms running in less than one second. Currently, the two main approaches, namely, AP and GINX, for realizing blind rotation are first introduced by Alperin-Sheriff and Peikert (CRYPTO 2014) and Gama, Izabachene, Nguyen and Xie (EUROCRYPT 2016), respectively.
> 
> In this paper, we propose a new blind rotation algorithm based on a GSW-like encryption from the NTRU assumption. Our algorithm has performance asymptotically independent from the key distributions, and outperforms AP and GINX in both the evaluation key size and the computational efficiency (especially for large key distributions). By using our blind rotation algorithm as a building block, we present new bootstrapping algorithms for both LWE and RLWE ciphertexts.
> 
> We implement our bootstrapping algorithm for LWE ciphertexts, and compare the actual performance with two bootstrapping algorithms, namely, FHEW/AP by Ducas and Micciancio (EUROCRYPT 2015) and TFHE/GINX by Chillotti, Gama, Georgieva and Izabachène (Journal of Cryptology 2020), that were implemented in the OpenFHE library. For parameters with ternary key distribution at 128-bit security, our bootstrapping only needs to store evaluation key of size 18.65 MB for blind rotation, which is about 89.8 times smaller than FHEW/AP and 2.9 times smaller than TFHE/GINX. Moreover, our bootstrapping can be done in 112 ms on a laptop, which is about 3.2 times faster than FHEW/AP and 2.1 times faster than TFHE/GINX. More improvements are available for large key distributions such as Gaussian distributions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_1](https://doi.org/10.1007/978-3-031-38551-3_1)
## HERMES: Efficient Ring Packing Using MLWE Ciphertexts and Application to Transciphering.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#hermes-efficient-ring-packing-using-mlwe-ciphertexts-and-application-to-transciphering)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#hermes-efficient-ring-packing-using-mlwe-ciphertexts-and-application-to-transciphering)
### Authors
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jaehyung Kim, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Jai Hyun Park, Seoul National University, Seoul, Republic of Korea
* Damien Stehlé, CryptoLab Inc., Lyon, France
### Abstract
> Most of the current fully homomorphic encryption (FHE) schemes are based on either the learning-with-errors (LWE) problem or on its ring variant (RLWE) for storing plaintexts. During the homomorphic computation of FHE schemes, RLWE formats provide high throughput when considering several messages, and LWE formats provide a low latency when there are only a few messages. Efficient conversion can bridge the advantages of each format. However, converting LWE formats into RLWE format, which is called ring packing, has been a challenging problem.
> 
> We propose an efficient solution for ring packing for FHE. The main improvement of this work is twofold. First, we accelerate the existing ring packing methods by using bootstrapping and ring switching techniques, achieving practical runtimes. Second, we propose a new method for efficient ring packing, HERMES, by using ciphertexts in Module-LWE (MLWE) formats, to also reduce the memory. To this end, we generalize the tools of LWE and RLWE formats for MLWE formats.
> 
> On a single-thread implementation, HERMES consumes 10.2s for the ring packing of \(2^{15}\) LWE-format ciphertexts into an RLWE-format ciphertext. This gives 41x higher throughput compared to the state-of-the-art ring packing for FHE, PEGASUS [S &P’21], which takes 51.7s for packing \(2^{12}\) LWE ciphertexts with similar homomorphic capacity. We also illustrate the efficiency of HERMES by using it for transciphering from LWE symmetric encryption to CKKS fully homomorphic encryption, significantly outperforming the recent proposals HERA [Asiacrypt’21] and Rubato [Eurocrypt’22].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_2](https://doi.org/10.1007/978-3-031-38551-3_2)
## Accelerating HE Operations from Key Decomposition Technique.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#accelerating-he-operations-from-key-decomposition-technique)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#accelerating-he-operations-from-key-decomposition-technique)
### Authors
* Miran Kim, Department of Mathematics and Research Institute for Convergence of Basic Science and Hanyang Institute of Bioscience and Biotechnology, Hanyang University, Seoul, Republic of Korea
* Dongwon Lee, Seoul National University, Seoul, Republic of Korea
* Jinyeong Seo, Seoul National University, Seoul, Republic of Korea
* Yongsoo Song, Seoul National University, Seoul, Republic of Korea
### Abstract
> Lattice-based homomorphic encryption (HE) schemes are based on the noisy encryption technique, where plaintexts are masked with some random noise for security. Recent advanced HE schemes rely on a decomposition technique to manage the growth of noise, which involves a conversion of a ciphertext entry into a short vector followed by multiplication with an evaluation key. Prior to this work, the decomposition procedure turns out to be the most time-consuming part, as it requires discrete Fourier transforms (DFTs) over the base ring for efficient polynomial arithmetic. In this paper, an expensive decomposition operation over a large modulus is replaced with relatively cheap operations over a ring of integers with a small bound. Notably, the cost of DFTs is reduced from quadratic to linear with the level of a ciphertext without any extra noise growth. We demonstrate the implication of our approach by applying it to the key-switching procedure. Our experiments show that the new key-switching method achieves a speedup of 1.2–2.3 or 2.1–3.3 times over the previous method, when the dimension of a base ring is \(2^{15}\) or \(2^{16}\), respectively.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_3](https://doi.org/10.1007/978-3-031-38551-3_3)
## MacORAMa: Optimal Oblivious RAM with Integrity.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#macorama-optimal-oblivious-ram-with-integrity)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#macorama-optimal-oblivious-ram-with-integrity)
### Authors
* Surya Mathialagan, MIT, Cambridge, MA, 02139, USA
* Neekon Vafa, MIT, Cambridge, MA, 02139, USA
### Abstract
> Oblivious RAM (ORAM), introduced by Goldreich and Ostrovsky (J. ACM ‘96), is a primitive that allows a client to perform RAM computations on an external database without revealing any information through the access pattern. For a database of size N, well-known lower bounds show that a multiplicative overhead of \(\varOmega (\log N)\) in the number of RAM queries is necessary assuming O(1) client storage. A long sequence of works culminated in the asymptotically optimal construction of Asharov, Komargodski, Lin, and Shi (CRYPTO ‘21) with \(O(\log N)\) worst-case overhead and O(1) client storage. However, this optimal ORAM is known to be secure only in the honest-but-curious setting, where an adversary is allowed to observe the access patterns but not modify the contents of the database. In the malicious setting, where an adversary is additionally allowed to tamper with the database, this construction and many others in fact become insecure.
> 
> In this work, we construct the first maliciously secure ORAM with worst-case \(O(\log N)\) overhead and O(1) client storage assuming one-way functions, which are also necessary. By the \(\varOmega (\log N)\) lower bound, our construction is asymptotically optimal. To attain this overhead, we develop techniques to intricately interleave online and offline memory checking for malicious security. Furthermore, we complement our positive result by showing the impossibility of a generic overhead-preserving compiler from honest-but-curious to malicious security, barring a breakthrough in memory checking.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_4](https://doi.org/10.1007/978-3-031-38551-3_4)
## Tri-State Circuits - A Circuit Model that Captures RAM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram)
### Authors
* David Heath, UIUC, Champaign, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, Georgia
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### Abstract
> We introduce tri-state circuits (TSCs). TSCs form a natural model of computation that, to our knowledge, has not been considered by theorists. The model captures a surprising combination of simplicity and power. TSCs are simple in that they allow only three wire values (0, 1, and undefined – \(\mathcal {Z}\)) and three types of fan-in two gates; they are powerful in that their statically placed gates fire (execute) eagerly as their inputs become defined, implying orders of execution that depend on input. This behavior is sufficient to efficiently evaluate RAM programs.
> 
> We construct a TSC that emulates T steps of any RAM program and that has only \(O(T \cdot \log ^3 T \cdot \log \log T)\) gates. Contrast this with the reduction from RAM to Boolean circuits, where the best approach scans all of memory on each access, incurring quadratic cost.
> 
> We connect TSCs with Garbled Circuits (GC). TSCs capture the power of garbling far better than Boolean Circuits, offering a more expressive model of computation that leaves per-gate cost essentially unchanged.
> 
> As an important application, we construct authenticated Garbled RAM (GRAM), enabling constant-round maliciously-secure 2PC of RAM programs. Let \(\lambda \) denote the security parameter. We extend authenticated garbling to TSCs; by simply plugging in our TSC-based RAM, we obtain authenticated GRAM running at cost \(O(T \cdot \log ^3 T \cdot \log \log T \cdot \lambda )\), outperforming all prior work, including prior semi-honest GRAM.
> 
> We also give semi-honest garbling of TSCs from a one-way function (OWF). This yields OWF-based GRAM at cost \(O(T \cdot \log ^3 T \cdot \log \log T \cdot \lambda )\), outperforming the best prior OWF-based GRAM by more than factor \(\lambda \).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_5](https://doi.org/10.1007/978-3-031-38551-3_5)
## Limits of Breach-Resistant and Snapshot-Oblivious RAMs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#limits-of-breach-resistant-and-snapshot-oblivious-rams)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#limits-of-breach-resistant-and-snapshot-oblivious-rams)
### Authors
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
* Giuseppe Persiano, Google, New York, USA
* Kevin Yeo, Google and Columbia University, New York, USA
### Abstract
> Oblivious RAMs (ORAMs) are an important cryptographic primitive that enable outsourcing data to a potentially untrusted server while hiding patterns of access to the data. ORAMs provide strong guarantees even in the face of a persistent adversary that views the transcripts of all operations and resulting memory contents. Unfortunately, the strong guarantees against persistent adversaries comes at the cost of efficiency as ORAMs are known to require \(\varOmega (\log n)\) overhead.
> 
> In an attempt to obtain faster constructions, prior works considered security against snapshot adversaries that only have limited access to operational transcripts and memory. We consider \((s,\ell )\)-snapshot adversaries that perform s data breaches and views the transcripts of \(\ell \) total queries. Promisingly, Du, Genkin and Grubbs [Crypto’22] presented an ORAM construction with \(O(\log \ell )\) overhead protecting against \((1,\ell )\)-snapshot adversaries with the transcript of \(\ell \) consecutive operations from a single breach. For small values of \(\ell \), this outperforms standard ORAMs.
> 
> In this work, we tackle whether it is possible to further push this construction beyond a single breach. Unfortunately, we show that protecting against even slightly stronger snapshot adversaries becomes difficult. As our main result, we present a \(\varOmega (\log n)\) lower bound for any ORAM protecting against a (3, 1)-snapshot adversary that performs three breaches and sees the transcript of only one query. In other words, our lower bound holds even if an adversary observes only memory contents during two breaches while managing to view the transcript of only one query in the other breach. Therefore, we surprisingly show that protecting against a snapshot adversary with three data breaches is as difficult as protecting against a persistent adversary.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_6](https://doi.org/10.1007/978-3-031-38551-3_6)
## Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications)
### Authors
* Kevin Yeo, Google, New York City, USA
* Kevin Yeo, Columbia University, New York City, USA
### Abstract
> Cuckoo hashing is a powerful primitive that enables storing items using small space with efficient querying. At a high level, cuckoo hashing maps n items into b entries storing at most \(\ell \) items such that each item is placed into one of k randomly chosen entries. Additionally, there is an overflow stash that can store at most s items. Many cryptographic primitives rely upon cuckoo hashing to privately embed and query data where it is integral to ensure small failure probability when constructing cuckoo hashing tables as it directly relates to the privacy guarantees.
> 
> As our main result, we present a more query-efficient cuckoo hashing construction using more hash functions. For construction failure probability \(\epsilon \), the query overhead of our scheme is \(O(1 + \sqrt{\log (1/\epsilon )/\log n})\). Our scheme has quadratically smaller query overhead than prior works for any target failure probability \(\epsilon \). We also prove lower bounds matching our construction. Our improvements come from a new understanding of the locality of cuckoo hashing failures for small sets of items.
> 
> We also initiate the study of robust cuckoo hashing where the input set may be chosen with knowledge of the hash functions. We present a cuckoo hashing scheme using more hash functions with query overhead \(\tilde{O}(\log \lambda )\) that is robust against \(\textsf{poly}(\lambda )\) adversaries. Furthermore, we present lower bounds showing that this construction is tight and that extending previous approaches of large stashes or entries cannot obtain robustness except with \(\varOmega (n)\) query overhead.
> 
> As applications of our results, we obtain improved constructions for batch codes and PIR. In particular, we present the most efficient explicit batch code and blackbox reduction from single-query PIR to batch PIR.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_7](https://doi.org/10.1007/978-3-031-38551-3_7)
## The Pseudorandom Oracle Model and Ideal Obfuscation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#the-pseudorandom-oracle-model-and-ideal-obfuscation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#the-pseudorandom-oracle-model-and-ideal-obfuscation)
### Authors
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### Abstract
> We introduce a new idealized model of hash functions, which we refer to as the pseudorandom oracle (Pr\(\mathcal {O}\)) model. Intuitively, it allows us to model cryptosystems that use the code of an ideal hash function in a non-black-box way. Formally, we model hash functions via a combination of a pseudorandom function (PRF) family and an ideal oracle. A user can initialize the hash function by choosing a PRF key k and mapping it to a public handle h using the oracle. Given the handle h and some input x, the oracle can also be called to evaluate the PRF at x with the corresponding key k. A user who chooses the PRF key k therefore has a complete description of the hash function and can use its code in non-black-box constructions, while an adversary, who just gets the handle h, only has black-box access to the hash function via the oracle.
> 
> As our main result, we show how to construct ideal obfuscation in the Pr\(\mathcal {O}\) model, starting from functional encryption (FE), which in turn can be based on well-studied polynomial hardness assumptions. In contrast, we know that ideal obfuscation cannot be instantiated in the basic random oracle model under any assumptions. We believe our result provides heuristic justification for the following: (1) most natural security goals implied by ideal obfuscation can be achieved in the real world; (2) obfuscation can be constructed from FE at polynomial security loss.
> 
> We also discuss how to interpret our result in the Pr\(\mathcal {O}\) model as a construction of ideal obfuscation using simple hardware tokens or as a way to bootstrap ideal obfuscation for PRFs to that for all functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_8](https://doi.org/10.1007/978-3-031-38551-3_8)
## Computational Wiretap Coding from Indistinguishability Obfuscation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#computational-wiretap-coding-from-indistinguishability-obfuscation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#computational-wiretap-coding-from-indistinguishability-obfuscation)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### Abstract
> A wiretap coding scheme for a pair of noisy channels \((\textsf{ChB},\textsf{ChE})\) enables Alice to reliably communicate a message to Bob by sending its encoding over \(\textsf{ChB}\), while hiding the message from an adversary Eve who obtains the same encoding over \(\textsf{ChE}\).
> 
> A necessary condition for the feasibility of wiretap coding is that \(\textsf{ChB}\) is not a degradation of \(\textsf{ChE}\), namely Eve cannot simulate Bob’s view. While insufficient in the information-theoretic setting, a recent work of Ishai, Korb, Lou, and Sahai (Crypto 2022) showed that the non-degradation condition is sufficient in the computational setting, assuming idealized flavors of obfuscation. The question of basing a similar feasibility result on standard cryptographic assumptions was left open, even in simple special cases.
> 
> In this work, we settle the question for all discrete memoryless channels where the (common) input alphabet of \(\textsf{ChB}\) and \(\textsf{ChE}\) is binary, and with arbitrary finite output alphabet, under standard (sub-exponential) hardness assumptions: namely those assumptions that imply indistinguishability obfuscation (Jain-Lin-Sahai 2021, 2022), and injective PRGs. In particular, this establishes the feasibility of computational wiretap coding when \(\textsf{ChB}\) is a binary symmetric channel with crossover probability p and \(\textsf{ChE}\) is a binary erasure channel with erasure probability e, where \(e>2p\).
> 
> On the information-theoretic side, our result builds on a new polytope characterization of channel degradation for pairs of binary-input channels, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_9](https://doi.org/10.1007/978-3-031-38551-3_9)
## On Optimal Tightness for Key Exchange with Full Forward Secrecy via Key Confirmation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#on-optimal-tightness-for-key-exchange-with-full-forward-secrecy-via-key-confirmation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-optimal-tightness-for-key-exchange-with-full-forward-secrecy-via-key-confirmation)
### Authors
* Kai Gellert, University of Wuppertal, Wuppertal, Germany
* Tibor Jager, University of Wuppertal, Wuppertal, Germany
* Kristian Gjøsteen, Norwegian University of Science and Technology, Trondheim, Norway
* Håkon Jacobsen, Thales Norway, Oslo, Norway
* Håkon Jacobsen, University of Oslo, Oslo, Norway
### Abstract
> A standard paradigm for building key exchange protocols with full forward secrecy (and explicit authentication) is to add key confirmation messages to an underlying protocol having only weak forward secrecy (and implicit authentication). Somewhat surprisingly, we show through an impossibility result that this simple trick must nevertheless incur a linear tightness loss in the number of parties for many natural protocols. This includes Krawczyk’s HMQV protocol (CRYPTO 2005) and the protocol of Cohn-Gordon et al. (CRYPTO 2019).
> 
> Cohn-Gordon et al. gave a very efficient underlying protocol with weak forward secrecy having a linear security loss, and showed that this is optimal for certain reductions. However, they also claimed that full forward secrecy could be achieved by adding key confirmation messages, and without any additional loss. Our impossibility result disproves this claim, showing that their approach, in fact, has an overall quadratic loss.
> 
> Motivated by this predicament we seek to restore the original linear loss claim of Cohn-Gordon et al. by using a different proof strategy. Specifically, we start by lowering the goal for the underlying protocol with weak forward secrecy, to a selective security notion where the adversary must commit to a long-term key it cannot reveal. This allows a tight reduction rather than a linear loss reduction. Next, we show that the protocol can be upgraded to full forward secrecy using key confirmation messages with a linear tightness loss, even when starting from the weaker selective security notion. Thus, our approach yields an overall tightness loss for the fully forward-secret protocol that is only linear, as originally claimed. Finally, we confirm that the underlying protocol of Cohn-Gordon et al. can indeed be proven selectively secure, tightly.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_10](https://doi.org/10.1007/978-3-031-38551-3_10)
## Security Analysis of the WhatsApp End-to-End Encrypted Backup Protocol.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#security-analysis-of-the-whatsapp-end-to-end-encrypted-backup-protocol)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#security-analysis-of-the-whatsapp-end-to-end-encrypted-backup-protocol)
### Authors
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tobias Handirk, Bergische Universität Wuppertal, Wuppertal, Germany
* Máté Horváth, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Sebastian Faller, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Julia Hesse, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Sebastian Faller, ETH Zurich, Zürich, Switzerland
### Abstract
> WhatsApp is an end-to-end encrypted (E2EE) messaging service used by billions of people. In late 2021, WhatsApp rolled out a new protocol for backing up chat histories. The E2EE WhatsApp backup protocol (WBP) allows users to recover their chat history from passwords, leaving WhatsApp oblivious of the actual encryption keys. The WBP builds upon the OPAQUE framework for password-based key exchange, which is currently undergoing standardization.
> 
> While considerable efforts have gone into the design and auditing of the WBP, the complexity of the protocol’s design and shortcomings in the existing security analyses of its building blocks make it hard to understand the actual security guarantees that the WBP provides.
> 
> In this work, we provide the first formal security analysis of the WBP. Our analysis in the universal composability (UC) framework confirms that the WBP provides strong protection of users’ chat history and passwords. It also shows that a corrupted server can under certain conditions make more password guesses than what previous analysis suggests.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_11](https://doi.org/10.1007/978-3-031-38551-3_11)
## On Active Attack Detection in Messaging with Immediate Decryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#on-active-attack-detection-in-messaging-with-immediate-decryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-active-attack-detection-in-messaging-with-immediate-decryption)
### Authors
* Khashayar Barooti, EPFL, Lausanne, Switzerland
* Daniel Collins, EPFL, Lausanne, Switzerland
* Simone Colombo, EPFL, Lausanne, Switzerland
* Loïs Huguenin-Dumittan, EPFL, Lausanne, Switzerland
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### Abstract
> The widely used Signal protocol provides protection against state exposure attacks through forward security (protecting past messages) and post-compromise security (for restoring security). It supports immediate decryption, allowing messages to be re-ordered or dropped at the protocol level without affecting correctness. In this work, we consider strong active attack detection for secure messaging with immediate decryption, where parties are able to immediately detect active attacks under certain conditions. We first consider in-band active attack detection, where participants who have been actively compromised but are still able to send a single message to their partner can detect the compromise. We propose two complementary notions to capture security, and present a compiler that provides security with respect to both notions. Our notions generalise existing work (RECOVER security) which only supported in-order messaging. We also study the related out-of-band attack detection problem by considering communication over out-of-band, authenticated channels and propose analogous security notions. We prove that one of our two notions in each setting imposes a linear communication overhead in the number of sent messages and security parameter using an information-theoretic argument. This implies that each message must information-theoretically contain all previous messages and that our construction, that essentially attaches the entire message history to every new message, is asymptotically optimal. We then explore ways to bypass this lower bound and highlight the feasibility of practical active attack detection compatible with immediate decryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_12](https://doi.org/10.1007/978-3-031-38551-3_12)
## Fork-Resilient Continuous Group Key Agreement.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#fork-resilient-continuous-group-key-agreement)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#fork-resilient-continuous-group-key-agreement)
### Authors
* Joël Alwen, AWS-Wickr, Seattle, USA
* Marta Mularczyk, AWS-Wickr, Seattle, USA
* Yiannis Tselekounis, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Continuous Group Key Agreement (CGKA) lets an evolving group of clients agree on a sequence of group keys. An important application of CGKA is scalable end-to-end (E2E) encrypted group messaging. A major problem preventing the use of CGKA over unreliable infrastructure are so-called forks. A fork occurs when group members have diverging views of the group’s history (and thus its current state); e.g. due to network or server failures. Once communication channels are restored, members resolve a fork by agreeing on the state of the group again. Today’s CGKA protocols make fork resolution challenging, as natural resolution strategies seem to conflict with the way the protocols enforce group state agreement and forward secrecy. Meanwhile, secure group messaging protocols which do support fork resolution do not scale nearly as well as CGKA does.
> 
> In this work, we pave the way to practical scalable E2E messaging over unreliable infrastructure. To that end, we generalize CGKA to Fork Resilient-CGKA which allows clients to process significantly more types of out-of-order network traffic. This is important for many natural fork resolution procedures as they are based, in part, on replaying missed traffic. Next, we give two FR-CGKA constructions: a practical one based on the CGKA underlying the MLS messaging standard and an optimally secure one (albeit with only theoretical efficiency). To further assist with fork resolution, we introduce a simple new abstraction to describe a client’s local protocol state. The abstraction describes all and only the information relevant to natural fork resolution, making it easier for higher-level fork resolution procedures to work with and reason about. We define a black-box extension of an FR-CGKA which maintains such a description of a client’s internal state. Finally, as a proof of concept, we give a basic fork resolution protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_13](https://doi.org/10.1007/978-3-031-38551-3_13)
## Streaming Functional Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#streaming-functional-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#streaming-functional-encryption)
### Authors
* Jiaxin Guan, Princeton University, Princeton, USA
* Alexis Korb, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> We initiate the study of streaming functional encryption (sFE) which is designed for scenarios in which data arrives in a streaming manner and is computed on in an iterative manner as the stream arrives. Unlike in a standard functional encryption (FE) scheme, in an sFE scheme, we (1) do not require the entire data set to be known at encryption time and (2) allow for partial decryption given only a prefix of the input. More specifically, in an sFE scheme, we can sequentially encrypt each data point \(x_i\) in a stream of data \(x = x_1\ldots x_n\) as it arrives, without needing to wait for all n values. We can then generate function keys for streaming functions which are stateful functions that take as input a message \(x_i\) and a state \(\textsf{st}_i\) and output a value \(y_i\) and the next state \(\textsf{st}_{i+1}\). For any \(k \le n\), a user with a function key for a streaming function f can learn the first k output values \(y_1\ldots y_k\) where \((y_i, \textsf{st}_{i+1}) = f(x_i, \textsf{st}_i)\) and \(\textsf{st}_1 = \bot \) given only ciphertexts for the first k elements \(x_1\ldots x_k\).
> 
> In this work, we introduce the notion of sFE and show how to construct it from FE. In particular, we show how to achieve a secure sFE scheme for \(\mathsf {P/Poly}\) from a compact, secure FE scheme for \(\mathsf {P/Poly}\), where our security notion for sFE is similar to standard FE security except that we require all function queries to be made before the challenge ciphertext query. Furthermore, by combining our result with the FE construction of Jain, Lin, and Sahai (STOC, 2022), we show how to achieve a secure sFE scheme for \(\mathsf {P/Poly}\) from the polynomial hardness of well-studied assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_14](https://doi.org/10.1007/978-3-031-38551-3_14)
## Attribute-Based Multi-input FE (and More) for Attribute-Weighted Sums.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#attribute-based-multi-input-fe-and-more-for-attribute-weighted-sums)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#attribute-based-multi-input-fe-and-more-for-attribute-weighted-sums)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Recently, Abdalla, Gong and Wee (Crypto 2020) provided the first functional encryption scheme for attribute-weighted sums (AWS), where encryption takes as input N (unbounded) attribute-value pairs \(\{\textbf{x}_i, \textbf{z}_i\}_{i \in [N]}\) where \(\textbf{x}_i\) is public and \(\textbf{z}_i\) is private, the secret key is associated with an arithmetic branching programs f, and decryption returns the weighted sum \({\sum }_{{i \in [N]}} f(\textbf{x}_i)^\top \textbf{z}_i\), leaking no additional information about the \(\textbf{z}_i\)’s.
> 
> We extend FE for AWS to the significantly more challenging multi-party setting and provide the first construction for attribute-based multi-input FE (MIFE) supporting AWS. For \(i \in [n]\), encryptor i can choose an attribute \(\textbf{y}_i\) together with AWS input \(\{\textbf{x}_{i,j}, \textbf{z}_{i,j}\}\) where \(j \in [N_i]\) and \(N_i\) is unbounded, the key generator can choose an access control policy \(g_i\) along with its AWS function \(h_i\) for each \(i \in [n]\), and the decryptor can compute
> 
> Previously, the only known attribute based MIFE was for the inner product functionality (Abdalla et al. Asiacrypt 2020), where additionally, \(\textbf{y}_i\) had to be fixed during setup and must remain the same for all ciphertexts in a given slot.
> 
> Our attribute based MIFE implies the notion of multi-input attribute based encryption (MIABE) recently studied by Agrawal, Yadav and Yamada (Crypto 2022) and Francati, Friolo, Malavolta and Venturi (Eurocrypt 2023), for a conjunction of predicates represented as arithmetic branching programs (ABP).
> 
> Along the way, we also provide the first constructions of multi-client FE (MCFE)\(^3\) and dynamic decentralized FE (DDFE) for the AWS functionality. Previously, the best known MCFE and DDFE schemes were for inner products (Chotard et al. ePrint 2018, Abdalla, Benhamouda and Gay, Asiacrypt 2019, and Chotard et al. Crypto 2020).
> 
> Our constructions are based on pairings and proven selectively secure under the matrix DDH assumption.(\(^3\) The literature considers two notions termed as MCFE, one strictly stronger than the other. The stronger notion implies MIFE while the weaker does not. Here, we refer to the stronger notion, making MCFE a strict generalization of MIFE.)

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_15](https://doi.org/10.1007/978-3-031-38551-3_15)
## How to Use (Plain) Witness Encryption: Registered ABE, Flexible Broadcast, and More.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#how-to-use-plain-witness-encryption-registered-abe-flexible-broadcast-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#how-to-use-plain-witness-encryption-registered-abe-flexible-broadcast-and-more)
### Authors
* Cody Freitag, Boston University, Boston, USA
* Brent Waters, UT Austin, Austin, USA
* David J. Wu, UT Austin, Austin, USA
* Brent Waters, NTT Research, Sunnyvale, USA
### Abstract
> Witness encryption is a generalization of public-key encryption where the public key can be any \(\textsf{NP}\) statement x and the associated decryption key is any witness w for x. While early constructions of witness encryption relied on multilinear maps and indistinguishability obfuscation (\(i\mathcal {O}\)), recent works have provided direct constructions of witness encryption that are more efficient than \(i\mathcal {O}\) (and also seem unlikely to yield \(i\mathcal {O}\)). Motivated by this progress, we revisit the possibility of using witness encryption to realize advanced cryptographic primitives previously known only in “obfustopia.”
> 
> In this work, we give new constructions of trustless encryption systems from plain witness encryption (in conjunction with the learning-with-errors assumption): (1) flexible broadcast encryption (a broadcast encryption scheme where users choose their own secret keys and users can encrypt to an arbitrary set of public keys); and (2) registered attribute-based encryption (a system where users choose their own keys and then register their public key together with a set of attributes with a deterministic and transparent key curator). Both primitives were previously only known from \(i\mathcal {O}\). We also show how to use our techniques to obtain an optimal broadcast encryption scheme in the random oracle model.
> 
> Underlying our constructions is a novel technique for using witness encryption based on a new primitive which we call function-binding hash functions. Whereas a somewhere statistically binding hash function statistically binds a digest to a few bits of the input, a function-binding hash function statistically binds a digest to the output of a function of the inputs. As we demonstrate in this work, function-binding hash functions provide us new ways to leverage the power of plain witness encryption and use it as the foundation of advanced cryptographic primitives. Finally, we show how to build function-binding hash functions for the class of disjunctions of block functions from leveled homomorphic encryption; this in combination with witness encryption yields our main results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_16](https://doi.org/10.1007/978-3-031-38551-3_16)
## Constant Input Attribute Based (and Predicate) Encryption from Evasive and Tensor LWE.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#constant-input-attribute-based-and-predicate-encryption-from-evasive-and-tensor-lwe)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#constant-input-attribute-based-and-predicate-encryption-from-evasive-and-tensor-lwe)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Mélissa Rossi, ANSSI, Paris, France
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, AIST, Tokyo, Japan
### Abstract
> Constructing advanced cryptographic primitives such as obfuscation or broadcast encryption from standard hardness assumptions in the post quantum regime is an important area of research, which has met with limited success despite significant effort. It is therefore extremely important to find new, simple to state assumptions in this regime which can be used to fill this gap. An important step was taken recently by Wee (Eurocrypt ’22) who identified two new assumptions from lattices, namely evasive \(\textsf{LWE}\) and tensor \(\textsf{LWE}\), and used these to construct broadcast encryption and ciphertext policy attribute based encryption for \(\textsf{P}\) with optimal parameters. Independently, Tsabary formulated a similar assumption and used it to construct witness encryption (Crypto ’22). Following Wee’s work, Vaikuntanathan, Wee and Wichs independently provided a construction of witness encryption (Asiacrypt ’22).
> 
> In this work, we advance this line of research by providing the first construction of multi-input attribute based encryption (\(\textsf{miABE}\)) for the function class \(\mathsf{NC_1}\) for any constant arity from evasive \(\textsf{LWE}\). Our construction can be extended to support the function class \(\textsf{P}\) by using evasive and a suitable strengthening of tensor \(\textsf{LWE}\). In more detail, our construction supports k encryptors, for any constant k, where each encryptor uses the master secret key \(\textsf{msk}\) to encode its input \((\textbf{x}_i, m_i)\), the key generator computes a key \(\textsf{sk}_f\) for a function \(f \in {\textsf{NC}}_1\) and the decryptor can recover \((m_1,\ldots ,m_k)\) if and only if \(f(\textbf{x}_1,\ldots ,\textbf{x}_k)=1\). The only known construction for \(\textsf{miABE}\) for \({\textsf{NC}}_1\) by Agrawal, Yadav and Yamada (Crypto ’22) supports arity 2 and relies on pairings in the generic group model (or with a non-standard knowledge assumption) in addition to \(\textsf{LWE}\). Furthermore, it is completely unclear how to go beyond arity 2 using this approach due to the reliance on pairings.
> 
> Using a compiler from Agrawal, Yadav and Yamada (Crypto ’22), our \(\textsf{miABE}\) can be upgraded to multi-input predicate encryption for the same arity and function class. Thus, we obtain the first constructions for constant-arity predicate and attribute based encryption for a generalized class such as \({\textsf{NC}}_1\) or \(\textsf{P}\) from simple assumptions that may be conjectured post-quantum secure. Along the way, we show that the tensor \(\textsf{LWE}\) assumption can be reduced to standard \(\textsf{LWE}\) in an important special case which was not known before. This adds confidence to the plausibility of the assumption and may be of wider interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_17](https://doi.org/10.1007/978-3-031-38551-3_17)
## Correlated Pseudorandomness from the Hardness of Quasi-Abelian Decoding.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#correlated-pseudorandomness-from-the-hardness-of-quasi-abelian-decoding)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#correlated-pseudorandomness-from-the-hardness-of-quasi-abelian-decoding)
### Authors
* Maxime Bombar, Laboratoire LIX, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, Laboratoire LIX, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria, Saclay, France
* Alain Couvreur, Inria, Saclay, France
* Clément Ducros, Inria, Saclay, France
* Geoffroy Couteau, CNRS, Paris, France
* Geoffroy Couteau, IRIF, Université Paris Cité, Paris, France
* Clément Ducros, IRIF, Université Paris Cité, Paris, France
### Abstract
> A recent paradigm put forth by Boyle et al. (CCS 2018, Crypto 2019) showed how pseudorandom correlation generators (PCG) can be used to generate large amounts of useful forms of correlated (pseudo)randomness, using minimal interactions followed solely by local computations, yielding silent secure two-party computation protocols. This can be extended to \(N \)-party using programmable PCG’s. Previous works constructed very efficient (non-programmable) PCG’s for correlations such as random oblivious transfers. However, the situation is less satisfying for random oblivious linear evaluations (\({\textsf{OLE}}\)’s), their generalisation over large fields. The state-of-the-art work of Boyle et al. (Crypto 2020) constructed programmable PCG’s for \({\textsf{OLE}}\), but their work suffers from two important downsides: (1) it only generates \({\textsf{OLE}}\)’s over large fields, and (2) it relies on a relatively new “splittable” ring-\(\textsf{LPN}\) assumption, which lacks strong security foundations.
> 
> In this work, we introduce the quasi-abelian syndrome decoding problem (\(\textsf{QA}\text {-}\textsf{SD}\)), a family of assumptions which generalises the well-established quasi-cyclic syndrome decoding assumption and allows to construct new programmable PCG’s for \({\textsf{OLE}}\) over any field \(\mathbb {F}_{q}\) with \(q>2\). Our analysis also sheds light on the security of the ring-\(\textsf{LPN}\) assumption used in Boyle et al., Crypto 2020). Using our new PCG’s, we obtain the first efficient \(N \)-party silent secure computation protocols for computing general arithmetic circuit over \(\mathbb {F}_q\) for any \(q > 2\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_18](https://doi.org/10.1007/978-3-031-38551-3_18)
## Expand-Convolute Codes for Pseudorandom Correlation Generators from LPN.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#expand-convolute-codes-for-pseudorandom-correlation-generators-from-lpn)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#expand-convolute-codes-for-pseudorandom-correlation-generators-from-lpn)
### Authors
* Srinivasan Raghuraman, Visa Research and MIT, Cambridge, USA
* Peter Rindal, Visa Research, Palo Alto, USA
* Titouan Tanguy, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> The recent development of pseudorandom correlation generators (PCG) holds tremendous promise for highly efficient MPC protocols. Among other correlations, PCGs allow for the efficient generation of oblivious transfer (OT) and vector oblivious linear evaluations (VOLE) with sublinear communication and concretely good computational overhead. This type of PCG makes use of a so-called LPN-friendly error-correcting code. That is, for large dimensions the code should have very efficient encoding and have high minimum distance.
> 
> We investigate existing LPN-friendly codes and find that several candidates are less secure than was believed. Beginning with the recent expand-accumulate codes, we find that for their aggressive parameters, aimed at good concrete efficiency, they achieve a smaller [pseudo] minimum distance than conjectured. This decreases the resulting security parameter of the PCG but it remains unclear by how much. We additionally show that the recently proposed and extremely efficient silver codes achieve only very small minimum distance and result in concretely efficient attacks on the resulting PCG protocol. As such, silver codes should not be used.
> 
> We introduce a new LPN-friendly code which we call expand-convolute. These codes have provably high minimum distance and faster encoding time than suitable alternatives, e.g. expand-accumulate. The main contribution of these codes is the introduction of a convolution step that dramatically increases the minimum distance. This in turn allows for a more efficient parameter selection which results in improved concrete performance. In particular, we observe a 3 times improvement in running time for a comparable security level.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_19](https://doi.org/10.1007/978-3-031-38551-3_19)
## Correlation Intractability and SNARGs from Sub-exponential DDH.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#correlation-intractability-and-snargs-from-sub-exponential-ddh)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#correlation-intractability-and-snargs-from-sub-exponential-ddh)
### Authors
* Arka Rai Choudhuri, NTT Research, Sunnyvale, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
* Sanjam Garg, University of California Berkeley, Berkeley, USA
* Jiaheng Zhang, University of California Berkeley, Berkeley, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Massachusets Institute of Technology, Cambridge, USA
### Abstract
> We provide the first constructions of SNARGs for Batch-\(\textsf{NP}\) and \(\textsf{P}\) based solely on the sub-exponential Decisional Diffie Hellman (DDH) assumption. Our schemes achieve poly-logarithmic proof sizes.
> 
> We obtain our results by following the correlation-intractability framework for secure instantiation of the Fiat-Shamir paradigm. The centerpiece of our results and of independent interest is a new construction of correlation-intractable hash functions for “small input” product relations verifiable in \(\textsf{TC}^0\), based on sub-exponential DDH.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_20](https://doi.org/10.1007/978-3-031-38551-3_20)
## Algebraic Reductions of Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#algebraic-reductions-of-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#algebraic-reductions-of-knowledge)
### Authors
* Abhiram Kothapalli, Carnegie Mellon University, Pittsburgh, USA
* Bryan Parno, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> We introduce reductions of knowledge, a generalization of arguments of knowledge, which reduce checking knowledge of a witness in one relation to checking knowledge of a witness in another (simpler) relation. Reductions of knowledge unify a growing class of modern techniques as well as provide a compositional framework to modularly reason about individual steps in complex arguments of knowledge. As a demonstration, we simplify and unify recursive arguments over linear algebraic statements by decomposing them as a sequence of reductions of knowledge. To do so, we develop the tensor reduction of knowledge, which generalizes the central reductive step common to many recursive arguments. Underlying the tensor reduction of knowledge is a new information-theoretic reduction, which, for any modules U, \(U_1\), and \(U_2\) such that \(U \cong U_1 \otimes U_2\), reduces the task of evaluating a homomorphism in U to evaluating a homomorphism in \(U_1\) and evaluating a homomorphism in \(U_2\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_21](https://doi.org/10.1007/978-3-031-38551-3_21)
## On the Impossibility of Algebraic NIZK in Pairing-Free Groups.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#on-the-impossibility-of-algebraic-nizk-in-pairing-free-groups)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-the-impossibility-of-algebraic-nizk-in-pairing-free-groups)
### Authors
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
### Abstract
> Non-Interactive Zero-Knowledge proofs (NIZK) allow a prover to convince a verifier that a statement is true by sending only one message and without conveying any other information. In the CRS model, many instantiations have been proposed from group-theoretic assumptions. On the one hand, some of these constructions use the group structure in a black-box way but rely on pairings, an example being the celebrated Groth-Sahai proof system. On the other hand, a recent line of research realized NIZKs from sub-exponential DDH in pairing-free groups using Correlation Intractable Hash functions, but at the price of making non black-box usage of the group.
> 
> As of today no construction is known to simultaneously reduce its security to pairing-free group problems and to use the underlying group in a black-box way.
> 
> This is indeed not a coincidence: in this paper, we prove that for a large class of NIZK either a pairing-free group is used non black-box by relying on element representation, or security reduces to external hardness assumptions. More specifically our impossibility applies to two incomparable cases. The first one covers Arguments of Knowledge (AoK) which proves that a preimage under a given one way function is known. The second one covers NIZK (not necessarily AoK) for hard subset problems, which captures relations such as DDH, Decision-Linear and Matrix-DDH.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_22](https://doi.org/10.1007/978-3-031-38551-3_22)
## A Note on Non-interactive Zero-Knowledge from CDH.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#a-note-on-non-interactive-zero-knowledge-from-cdh)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#a-note-on-non-interactive-zero-knowledge-from-cdh)
### Authors
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, MIT, Cambridge, MA, USA
* Willy Quach, Northeastern University, Boston, MA, USA
### Abstract
> We build non-interactive zero-knowledge (NIZK) and ZAP arguments for all \(\textsf{NP} \) where soundness holds for infinitely-many security parameters, and against uniform adversaries, assuming the subexponential hardness of the Computational Diffie-Hellman (CDH) assumption. We additionally prove the existence of NIZK arguments with these same properties assuming the polynomial hardness of both CDH and the Learning Parity with Noise (LPN) assumption. In both cases, the CDH assumption does not require a group equipped with a pairing.
> 
> Infinitely-often uniform security is a standard byproduct of commonly used non-black-box techniques that build on disjunction arguments on the (in)security of some primitive. In the course of proving our results, we develop a new variant of this non-black-box technique that yields improved guarantees: we obtain explicit constructions (previous works generally only obtained existential results) where security holds for a relatively dense set of security parameters (as opposed to an arbitrary infinite set of security parameters). We demonstrate that our technique can have applications beyond our main results.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_23](https://doi.org/10.1007/978-3-031-38551-3_23)
