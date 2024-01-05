# Crypto 21-1
## On the Possibility of Basing Cryptography on EXP≠ BPP.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#on-the-possibility-of-basing-cryptography-on-exp-bpp) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#on-the-possibility-of-basing-cryptography-on-exp-bpp)**
### 作者
* Yanyi Liu, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York, USA
### 摘要
> Liu and Pass (FOCS’20) recently demonstrated an equivalence between the existence of one-way functions (OWFs) and mild average-case hardness of the time-bounded Kolmogorov complexity problem. In this work, we establish a similar equivalence but to a different form of time-bounded Kolmogorov Complexity—namely, Levin’s notion of Kolmogorov Complexity—whose hardness is closely related to the problem of whether \(\mathsf{EXP}\ne \mathsf{BPP}\). In more detail, let Kt(x) denote the Levin-Kolmogorov Complexity of the string x; that is, \(Kt(x) = \min _{{\varPi }\in \{0,1\}^*, t \in \mathbb {N}}\{|{\varPi }| + \lceil \log t \rceil : U({\varPi }, 1^t) = x\}\), where U is a universal Turing machine, and \(U({\varPi },1^t)\) denotes the output of the program \(\varPi \) after t steps, and let \(\mathsf{MKtP}\) denote the language of pairs (x, k) having the property that \(Kt(x) \le k\). We demonstrate that:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_2](https://doi.org/10.1007/978-3-030-84242-0_2)
## Linear Cryptanalysis of FF3-1 and FEA.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#linear-cryptanalysis-of-ff3-1-and-fea) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#linear-cryptanalysis-of-ff3-1-and-fea)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> Improved attacks on generic small-domain Feistel ciphers with alternating round tweaks are obtained using linear cryptanalysis. This results in practical distinguishing and message-recovery attacks on the United States format-preserving encryption standard FF3-1 and the South-Korean standards FEA-1 and FEA-2. The data complexity of the proposed attacks on FF3-1 and FEA-1 is \(\widetilde{\mathcal {O}}(N^{r/2 - 1.5})\), where \(N^2\) is the domain size and r is the number of rounds. For example, FF3-1 with \(N = 10^3\) can be distinguished from an ideal tweakable block cipher with advantage \(\ge 1/10\) using \(2^{23}\) encryption queries. Recovering the left half of a message with similar advantage requires \(2^{24}\) data. The analysis of FF3-1 serves as an interesting real-world application of (generalized) linear cryptanalysis over the group \(\mathbb {Z}/N\mathbb {Z}\).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_3](https://doi.org/10.1007/978-3-030-84242-0_3)
## Efficient Key Recovery for All HFE Signature Variants.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#efficient-key-recovery-for-all-hfe-signature-variants) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#efficient-key-recovery-for-all-hfe-signature-variants)**
### 作者
* Jintai Ding, Yau Mathematical Center, Tsinghua University, Beijing, China
* Chengdong Tao, Ding Lab, Beijing Institute of Mathematical Science and Applications, Beijing, China
* Jintai Ding, Ding Lab, Beijing Institute of Mathematical Science and Applications, Beijing, China
* Albrecht Petzoldt, FAU Erlangen-Nuremberg, Nuremberg, Germany
### 摘要
> The HFE cryptosystem is one of the most popular multi- variate schemes. Especially in the area of digital signatures, the HFEv- variant offers short signatures and high performance. Recently, an instance of the HFEv- signature scheme called GeMSS was selected as one of the alternative candidates for signature schemes in the third round of the NIST Post-Quantum Crypto (PQC) Standardization Project.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_4](https://doi.org/10.1007/978-3-030-84242-0_4)
## Three Halves Make a Whole? Beating the Half-Gates Lower Bound for Garbled Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#three-halves-make-a-whole-beating-the-half-gates-lower-bound-for-garbled-circuits)**
### 作者
* Mike Rosulek, Oregon State University, Corvallis, USA
* Lawrence Roy, Oregon State University, Corvallis, USA
### 摘要
> We describe a garbling scheme for boolean circuits, in which XOR gates are free and AND gates require communication of \(1.5\kappa + 5\) bits. This improves over the state-of-the-art “half-gates” scheme of Zahur, Rosulek, and Evans (Eurocrypt 2015), in which XOR gates are free and AND gates cost \(2\kappa \) bits. The half-gates paper proved a lower bound of \(2\kappa \) bits per AND gate, in a model that captured all known garbling techniques at the time. We bypass this lower bound with a novel technique that we call slicing and dicing, which involves slicing wire labels in half and operating separately on those halves. Ours is the first to bypass the lower bound while being fully compatible with free-XOR, making it a drop-in replacement for half-gates. Our construction is proven secure from a similar assumption to prior free-XOR garbling (circular correlation-robust hash), and uses only slightly more computation than half-gates.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_5](https://doi.org/10.1007/978-3-030-84242-0_5)
## Threshold Schnorr with Stateless Deterministic Signing from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#threshold-schnorr-with-stateless-deterministic-signing-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#threshold-schnorr-with-stateless-deterministic-signing-from-standard-assumptions)**
### 作者
* François Garillot, Novi/Facebook, Palo Alto, USA
* Valeria Nikolaenko, Novi/Facebook, Palo Alto, USA
* Yashvanth Kondi, Northeastern University, Boston, USA
* Payman Mohassel, Facebook, Palo Alto, USA
### 摘要
> Schnorr’s signature scheme permits an elegant threshold signing protocol due to its linear signing equation. However each new signature consumes fresh randomness, which can be a major attack vector in practice. Sources of randomness in deployments are frequently either unreliable, or require state continuity, i.e. reliable fresh state resilient to rollbacks. State continuity is a notoriously difficult guarantee to achieve in practice, due to system crashes caused by software errors, malicious actors, or power supply interruptions (Parno et al., S&P ’11). This is a non-issue for Schnorr variants such as EdDSA, which is specified to derive nonces deterministically as a function of the message and the secret key. However, it is challenging to translate these benefits to the threshold setting, specifically to construct a threshold Schnorr scheme where signing neither requires parties to consume fresh randomness nor update long-term secret state.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_6](https://doi.org/10.1007/978-3-030-84242-0_6)
## Two-Round Trip Schnorr Multi-signatures via Delinearized Witnesses.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#two-round-trip-schnorr-multi-signatures-via-delinearized-witnesses)**
### 作者
* Handan Kılınç Alper, Web3 Foundation, Zug, Switzerland
* Jeffrey Burdges, Web3 Foundation, Zug, Switzerland
### 摘要
> We construct a two-round Schnorr-based signature scheme (DWMS) by delinearizing two pre-commitments supplied by each signer. DWMS is a secure signature scheme in the algebraic group model (AGM) and the random oracle model (ROM) under the assumption of the hardness of the one-more discrete logarithm problem and the 2-entwined sum problem that we introduce in this paper. Our new m-entwined sum problem tweaks the k-sum problem in a scalar field using the associated group. We prove the hardness of our new problem in the AGM assuming the hardness of the discrete logarithm problem in the associated group. We believe that our new problem simplifies the security proofs of multi-signature schemes that use the delinearization of commitments.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_7](https://doi.org/10.1007/978-3-030-84242-0_7)
## MuSig2: Simple Two-Round Schnorr Multi-signatures.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#musig2-simple-two-round-schnorr-multi-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#musig2-simple-two-round-schnorr-multi-signatures)**
### 作者
* Jonas Nick, Blockstream, Victoria, Canada
* Tim Ruffing, Blockstream, Victoria, Canada
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> Multi-signatures enable a group of signers to produce a joint signature on a joint message. Recently, Drijvers et al. (S&P’19) showed that all thus far proposed two-round multi-signature schemes in the pure DL setting (without pairings) are insecure under concurrent signing sessions. While Drijvers et al. proposed a secure two-round scheme, this efficiency in terms of rounds comes with the price of having signatures that are more than twice as large as Schnorr signatures, which are becoming popular in cryptographic systems due to their practicality (e.g., they will likely be adopted in Bitcoin). If one needs a multi-signature scheme that can be used as a drop-in replacement for Schnorr signatures, then one is forced to resort either to a three-round scheme or to sequential signing sessions, both of which are undesirable options in practice.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_8](https://doi.org/10.1007/978-3-030-84242-0_8)
## Tighter Security for Schnorr Identification and Signatures: A High-Moment Forking Lemma for ${\varSigma }$-Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#tighter-security-for-schnorr-identification-and-signatures-a-high-moment-forking-lemma-for-varsigma-protocols)**
### 作者
* Lior Rotem, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
### 摘要
> The Schnorr identification and signature schemes have been amongst the most influential cryptographic protocols of the past three decades. Unfortunately, although the best-known attacks on these two schemes are via discrete-logarithm computation, the known approaches for basing their security on the hardness of the discrete logarithm problem encounter the “square-root barrier”. In particular, in any group of order p where Shoup’s generic hardness result for the discrete logarithm problem is believed to hold (and is thus used for setting concrete security parameters), the best-known t-time attacks on the Schnorr identification and signature schemes have success probability \(t^2/p\), whereas existing proofs of security only rule out attacks with success probabilities \((t^2/p)^{1/2}\) and \((q_{\mathsf {H}} \cdot t^2/p)^{1/2}\), respectively, where \(q_{\mathsf {H}}\) denotes the number of random-oracle queries issued by the attacker.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_9](https://doi.org/10.1007/978-3-030-84242-0_9)
## DualRing: Generic Construction of Ring Signatures with Efficient Instantiations.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#dualring-generic-construction-of-ring-signatures-with-efficient-instantiations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#dualring-generic-construction-of-ring-signatures-with-efficient-instantiations)**
### 作者
* Tsz Hon Yuen, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Man Ho Au, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Muhammed F. Esgin, Department of Software Systems and Cybersecurity, Faculty of Information Technology, Monash University, Melbourne, Australia
* Joseph K. Liu, Department of Software Systems and Cybersecurity, Faculty of Information Technology, Monash University, Melbourne, Australia
* Muhammed F. Esgin, CSIRO’s Data61, Melbourne, Australia
* Zhimin Ding, Rice University, Houston, USA
### 摘要
> We introduce a novel generic ring signature construction, called DualRing, which can be built from several canonical identification schemes (such as Schnorr identification). DualRing differs from the classical ring signatures by its formation of two rings: a ring of commitments and a ring of challenges. It has a structural difference from the common ring signature approaches based on accumulators or zero-knowledge proofs of the signer index. Comparatively, DualRing has a number of unique advantages.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_10](https://doi.org/10.1007/978-3-030-84242-0_10)
## Compact Ring Signatures from Learning with Errors.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#compact-ring-signatures-from-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#compact-ring-signatures-from-learning-with-errors)**
### 作者
* Rohit Chatterjee, Stony Brook University, Stony Brook, USA
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Omkant Pandey, Stony Brook University, Stony Brook, USA
* Sina Shiehian, Stony Brook University, Stony Brook, USA
* Sanjam Garg, University of California, Berkeley, USA
* Sina Shiehian, University of California, Berkeley, USA
* Sanjam Garg, NTT Research, Tokyo, Japan
* Mohammad Hajiabadi, University of Waterloo, Waterloo, Canada
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> Ring signatures allow a user to sign a message on behalf of a “ring” of signers, while hiding the true identity of the signer. As the degree of anonymity guaranteed by a ring signature is directly proportional to the size of the ring, an important goal in cryptography is to study constructions that minimize the size of the signature as a function of the number of ring members.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_11](https://doi.org/10.1007/978-3-030-84242-0_11)
## A Black-Box Approach to Post-Quantum Zero-Knowledge in Constant Rounds.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#a-black-box-approach-to-post-quantum-zero-knowledge-in-constant-rounds) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#a-black-box-approach-to-post-quantum-zero-knowledge-in-constant-rounds)**
### 作者
* Nai-Hui Chia, QuICS, University of Maryland, College Park, USA
* Nai-Hui Chia, Luddy School of Informatics, Computing, and Engineering, Indiana University, Bloomington, USA
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taiwan, China
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> In a recent seminal work, Bitansky and Shmueli (STOC ’20) gave the first construction of a constant round zero-knowledge argument for \(\mathbf {NP}\) secure against quantum attacks. However, their construction has several drawbacks compared to the classical counterparts. Specifically, their construction only achieves computational soundness, requires strong assumptions of quantum hardness of learning with errors (QLWE assumption) and the existence of quantum fully homomorphic encryption (QFHE), and relies on non-black-box simulation.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_12](https://doi.org/10.1007/978-3-030-84242-0_12)
## On the Concurrent Composition of Quantum Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#on-the-concurrent-composition-of-quantum-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#on-the-concurrent-composition-of-quantum-zero-knowledge)**
### 作者
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* Rolando L. La Placa, MIT, Cambridge, USA
### 摘要
> We study the notion of zero-knowledge secure against quantum polynomial-time verifiers (referred to as quantum zero-knowledge) in the concurrent composition setting. Despite being extensively studied in the classical setting, concurrent composition in the quantum setting has hardly been studied.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_13](https://doi.org/10.1007/978-3-030-84242-0_13)
## Multi-theorem Designated-Verifier NIZK for QMA.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#multi-theorem-designated-verifier-nizk-for-qma) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#multi-theorem-designated-verifier-nizk-for-qma)**
### 作者
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
### 摘要
> We present a designated-verifier non-interactive zero-knowledge argument system for QMA with multi-theorem security under the Learning with Errors Assumption. All previous such protocols for QMA are only single-theorem secure. We also relax the setup assumption required in previous works. We prove security in the malicious designated-verifier (MDV-NIZK) model (Quach, Rothblum, and Wichs, EUROCRYPT 2019), where the setup consists of a mutually trusted random string and an untrusted verifier public key.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_14](https://doi.org/10.1007/978-3-030-84242-0_14)
## On the Round Complexity of Secure Quantum Computation.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#on-the-round-complexity-of-secure-quantum-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#on-the-round-complexity-of-secure-quantum-computation)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, USA
* Andrea Coladangelo, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Palo Alto, USA
### 摘要
> We construct the first constant-round protocols for secure quantum computation in the two-party (2PQC) and multi-party (MPQC) settings with security against malicious adversaries. Our protocols are in the common random string (CRS) model.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_15](https://doi.org/10.1007/978-3-030-84242-0_15)
## Round Efficient Secure Multiparty Quantum Computation with Identifiable Abort.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#round-efficient-secure-multiparty-quantum-computation-with-identifiable-abort) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#round-efficient-secure-multiparty-quantum-computation-with-identifiable-abort)**
### 作者
* Bar Alon, Department of Computer Science, Ariel University, Ariel, Israel
* Hao Chung, Department of Electrical and Computer Engineering, Carnegie Mellon University, Pittsburgh, USA
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Mi-Ying Huang, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Yi Lee, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Yu-Ching Shen, Institute of Information Science, Academia Sinica, Taipei City, Taiwan
* Mi-Ying Huang, Department of Computer Science and Information Engineering, National Taiwan University, Taipei City, Taiwan
### 摘要
> A recent result by Dulek  et al. (EUROCRYPT 2020) showed a secure protocol for computing any quantum circuit even without the presence of an honest majority. Their protocol, however, is susceptible to a “denial of service” attack and allows even a single corrupted party to force an abort. We propose the first quantum protocol that admits security-with-identifiable-abort, which allows the honest parties to agree on the identity of a corrupted party in case of an abort. Additionally, our protocol is the first to have the property that the number of rounds where quantum communication is required is independent of the circuit complexity. Furthermore, if there exists a post-quantum secure classical protocol whose round complexity is independent of the circuit complexity, then our protocol has this property as well. Our protocol is secure under the assumption that classical quantum-resistant fully homomorphic encryption schemes with decryption circuit of logarithmic depth exist. Interestingly, our construction also admits a reduction from quantum fair secure computation to classical fair secure computation.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_16](https://doi.org/10.1007/978-3-030-84242-0_16)
## One-Way Functions Imply Secure Computation in a Quantum World.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#one-way-functions-imply-secure-computation-in-a-quantum-world) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#one-way-functions-imply-secure-computation-in-a-quantum-world)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, USA
* Andrea Coladangelo, UC Berkeley, Berkeley, USA
* Dakshita Khurana, UIUC, Champaign, USA
* Fermi Ma, Princeton University and NTT Research, Princeton, USA
### 摘要
> We prove that quantum-hard one-way functions imply simulation-secure quantum oblivious transfer (QOT), which is known to suffice for secure computation of arbitrary quantum functionalities. Furthermore, our construction only makes black-box use of the quantum-hard one-way function.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_17](https://doi.org/10.1007/978-3-030-84242-0_17)
## Impossibility of Quantum Virtual Black-Box Obfuscation of Classical Circuits.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#impossibility-of-quantum-virtual-black-box-obfuscation-of-classical-circuits) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#impossibility-of-quantum-virtual-black-box-obfuscation-of-classical-circuits)**
### 作者
* Gorjan Alagic, Joint Center for Quantum Information and Computer Science, University of Maryland, College Park, MD, USA
* Gorjan Alagic, National Institute of Standards and Technology, Gaithersburg, MD, USA
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Yfke Dulek, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Christian Schaffner, University of Amsterdam, Amsterdam, The Netherlands
* Yfke Dulek, QuSoft, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, Amsterdam, The Netherlands
### 摘要
> Virtual black-box obfuscation is a strong cryptographic primitive: it encrypts a circuit while maintaining its full input/output functionality. A remarkable result by Barak et al. (Crypto 2001) shows that a general obfuscator that obfuscates classical circuits into classical circuits cannot exist. A promising direction that circumvents this impossibility result is to obfuscate classical circuits into quantum states, which would potentially be better capable of hiding information about the obfuscated circuit. We show that, under the assumption that Learning With Errors (LWE) is hard for quantum computers, this quantum variant of virtual black-box obfuscation of classical circuits is generally impossible. On the way, we show that under the presence of dependent classical auxiliary input, even the small class of classical point functions cannot be quantum virtual black-box obfuscated.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_18](https://doi.org/10.1007/978-3-030-84242-0_18)
## New Approaches for Quantum Copy-Protection.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#new-approaches-for-quantum-copy-protection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#new-approaches-for-quantum-copy-protection)**
### 作者
* Scott Aaronson, The University of Texas at Austin, Austin, USA
* Jiahui Liu, The University of Texas at Austin, Austin, USA
* Ruizhe Zhang, The University of Texas at Austin, Austin, USA
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University and NTT Research, Princeton, USA
### 摘要
> Quantum copy-protection uses the unclonability of quantum states to construct quantum software that provably cannot be pirated. copy-protection would be immensely useful, but unfortunately, little is known about achieving it in general. In this work, we make progress on this goal, by giving the following results:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_19](https://doi.org/10.1007/978-3-030-84242-0_19)
## Hidden Cosets and Applications to Unclonable Cryptography.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#hidden-cosets-and-applications-to-unclonable-cryptography) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#hidden-cosets-and-applications-to-unclonable-cryptography)**
### 作者
* Andrea Coladangelo, University of California, Berkeley, USA
* Jiahui Liu, The University of Texas at Austin, Austin, USA
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University and NTT Research, Princeton, USA
### 摘要
> In 2012, Aaronson and Christiano introduced the idea of hidden subspace states to build public-key quantum money [STOC ’12]. Since then, this idea has been applied to realize several other cryptographic primitives which enjoy some form of unclonability.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_20](https://doi.org/10.1007/978-3-030-84242-0_20)
## On Tight Quantum Security of HMAC and NMAC in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#on-tight-quantum-security-of-hmac-and-nmac-in-the-quantum-random-oracle-model)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
* Tetsu Iwata, Nagoya University, Nagoya, Japan
### 摘要
> HMAC and NMAC are the most basic and important constructions to convert Merkle-Damgård hash functions into message authentication codes (MACs) or pseudorandom functions (PRFs). In the quantum setting, at CRYPTO 2017, Song and Yun showed that HMAC and NMAC are quantum pseudorandom functions (qPRFs) under the standard assumption that the underlying compression function is a qPRF. Their proof guarantees security up to \(O(2^{n/5})\) or \(O(2^{n/8})\) quantum queries when the output length of HMAC and NMAC is n bits. However, there is a gap between the provable security bound and a simple distinguishing attack that uses \(O(2^{n/3})\) quantum queries. This paper settles the problem of closing the gap. We show that the tight bound of the number of quantum queries to distinguish HMAC or NMAC from a random function is \(\Theta (2^{n/3})\) in the quantum random oracle model, where compression functions are modeled as quantum random oracles. To give the tight quantum bound, based on an alternative formalization of Zhandry’s compressed oracle technique, we introduce a new proof technique focusing on the symmetry of quantum query records.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_21](https://doi.org/10.1007/978-3-030-84242-0_21)
## Quantum Collision Attacks on Reduced SHA-256 and SHA-512.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#quantum-collision-attacks-on-reduced-sha-256-and-sha-512)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> In this paper, we study dedicated quantum collision attacks on SHA-256 and SHA-512 for the first time. The attacks reach 38 and 39 steps, respectively, which significantly improve the classical attacks for 31 and 27 steps. Both attacks adopt the framework of the previous work that converts many semi-free-start collisions into a 2-block collision, and are faster than the generic attack in the cost metric of time-space tradeoff. We observe that the number of required semi-free-start collisions can be reduced in the quantum setting, which allows us to convert the previous classical 38 and 39 step semi-free-start collisions into a collision. The idea behind our attacks is simple and will also be applicable to other cryptographic hash functions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_22](https://doi.org/10.1007/978-3-030-84242-0_22)
## Halo Infinite: Proof-Carrying Data from Additive Polynomial Commitments.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#halo-infinite-proof-carrying-data-from-additive-polynomial-commitments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#halo-infinite-proof-carrying-data-from-additive-polynomial-commitments)**
### 作者
* Dan Boneh, Stanford, Stanford, USA
* Ben Fisch, Stanford, Stanford, USA
* Justin Drake, Ethereum Foundation, Zug, Switzerland
* Ariel Gabizon, AZTEC Protocol, Bury Saint Edmunds, UK
### 摘要
> Polynomial commitment schemes (PCS) have recently been in the spotlight for their key role in building SNARKs. A PCS provides the ability to commit to a polynomial over a finite field and prove its evaluation at points. A succinct PCS has commitment and evaluation proof size sublinear in the degree of the polynomial. An efficient PCS has sublinear proof verification. Any efficient and succinct PCS can be used to construct a SNARK with similar security and efficiency characteristics (in the random oracle model).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_23](https://doi.org/10.1007/978-3-030-84242-0_23)
## Proof-Carrying Data Without Succinct Arguments.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#proof-carrying-data-without-succinct-arguments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#proof-carrying-data-without-succinct-arguments)**
### 作者
* Benedikt Bünz, Stanford University, Stanford, USA
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* William Lin, UC Berkeley, Berkeley, USA
* Pratyush Mishra, UC Berkeley, Berkeley, USA
* Nicholas Spooner, Boston University, Boston, USA
### 摘要
> Proof-carrying data (PCD) is a powerful cryptographic primitive that enables mutually distrustful parties to perform distributed computations that run indefinitely. Known approaches to construct PCD are based on succinct non-interactive arguments of knowledge (SNARKs) that have a succinct verifier or a succinct accumulation scheme.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_24](https://doi.org/10.1007/978-3-030-84242-0_24)
## Subquadratic SNARGs in the Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#subquadratic-snargs-in-the-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#subquadratic-snargs-in-the-random-oracle-model)**
### 作者
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Eylon Yogev, BU, Boston, USA
* Eylon Yogev, TAU, Tel Aviv, Israel
### 摘要
> In a seminal work, Micali (FOCS 1994) gave the first succinct non-interactive argument (SNARG) in the random oracle model (ROM). The construction combines a PCP and a cryptographic commitment, and has several attractive features: it is plausibly post-quantum; it can be heuristically instantiated via lightweight cryptography; and it has a transparent (public-coin) parameter setup. However, it also has a significant drawback: a large argument size.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_25](https://doi.org/10.1007/978-3-030-84242-0_25)
## Sumcheck Arguments and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#sumcheck-arguments-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#sumcheck-arguments-and-their-applications)**
### 作者
* Jonathan Bootle, IBM Research – Zurich, Zurich, Switzerland
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Katerina Sotiraki, UC Berkeley, Berkeley, USA
### 摘要
> We introduce a class of interactive protocols, which we  call sumcheck arguments, that establishes a novel connection between the sumcheck protocol (Lund et al. JACM 1992) and folding techniques for Pedersen commitments (Bootle et al. EUROCRYPT 2016).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_26](https://doi.org/10.1007/978-3-030-84242-0_26)
## An Algebraic Framework for Universal and Updatable SNARKs.
🌍 [English](../../../docs/en/Crypto/Crypto%2021-1.md#an-algebraic-framework-for-universal-and-updatable-snarks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto%2021-1.md#an-algebraic-framework-for-universal-and-updatable-snarks)**
### 作者
* Carla Ràfols, Universitat Pompeu Fabra, Barcelona, Spain
* Arantxa Zapico, Universitat Pompeu Fabra, Barcelona, Spain
* Carla Ràfols, Cybercat, Barcelona, Spain
### 摘要
> We introduce Checkable Subspace Sampling Arguments, a new information theoretic interactive proof system in which the prover shows that a vector has been sampled in a subspace according to the verifier’s coins. We show that this primitive provides a unifying view that explains the technical core of most of the constructions of universal and updatable pairing-based (zk)SNARKs. This characterization is extended to a fully algebraic framework for designing such SNARKs in a modular way. We propose new constructions of CSS arguments that lead to SNARKs with different performance trade-offs.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84242-0_27](https://doi.org/10.1007/978-3-030-84242-0_27)
