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

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_4](https://doi.org/10.1007/978-3-031-38551-3_4)
## Tri-State Circuits - A Circuit Model that Captures RAM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram)
### Authors
* David Heath, UIUC, Champaign, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, Georgia
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### Abstract
> We introduce tri-state circuits (TSCs). TSCs form a natural model of computation that, to our knowledge, has not been considered by theorists. The model captures a surprising combination of simplicity and power. TSCs are simple in that they allow only three wire values (0, 1, and undefined – \(\mathcal {Z}\)) and three types of fan-in two gates; they are powerful in that their statically placed gates fire (execute) eagerly as their inputs become defined, implying orders of execution that depend on input. This behavior is sufficient to efficiently evaluate RAM programs.

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

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_6](https://doi.org/10.1007/978-3-031-38551-3_6)
## Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications)
### Authors
* Kevin Yeo, Google, New York City, USA
* Kevin Yeo, Columbia University, New York City, USA
### Abstract
> Cuckoo hashing is a powerful primitive that enables storing items using small space with efficient querying. At a high level, cuckoo hashing maps n items into b entries storing at most \(\ell \) items such that each item is placed into one of k randomly chosen entries. Additionally, there is an overflow stash that can store at most s items. Many cryptographic primitives rely upon cuckoo hashing to privately embed and query data where it is integral to ensure small failure probability when constructing cuckoo hashing tables as it directly relates to the privacy guarantees.

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
> We introduce a new idealized model of hash functions, which we refer to as the pseudorandom oracle (Pr\(\mathcal {O}\)) model. Intuitively, it allows us to model cryptosystems that use the code of an ideal hash function in a non-black-box way. Formally, we model hash functions via a combination of a pseudorandom function (PRF) family and an ideal oracle. A user can initialize the hash function by choosing a PRF key k and mapping it to a public handle h using the oracle. Given the handle h and some input x, the oracle can also be called to evaluate the PRF at x with the corresponding key k. A user who chooses the PRF key k therefore has a complete description of the hash function and can use its code in non-black-box constructions, while an adversary, who just gets the handle h, only has black-box access to the hash function via the oracle.

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

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_23](https://doi.org/10.1007/978-3-031-38551-3_23)
